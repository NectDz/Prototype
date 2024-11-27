import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Skeleton,
  Stack,
} from "@mui/material";
import UpdateCard from "./UpdateCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../../firebase-config";
import { boardMembers } from "../../../Home/Carousel/EBoardCarousel"; // Ensure this is the correct path

const getAvatarByAuthor = (authorName: string): string => {
  const member = boardMembers.find(
    (member) => member.name.toLowerCase() === authorName.toLowerCase()
  );
  return member ? member.imageUrl : "/path/to/avatar.jpg";
};

interface Update {
  id: string;
  title: string;
  body: string;
  avatarSrc?: string;
  author: string;
  timePosted?: FirestoreTimestamp; // Keep this optional for safety
  thumbnailURL: string;
}

interface FirestoreTimestamp {
  seconds: number;
  nanoseconds: number;
}

const UpdateCarousel = () => {
  const [updates, setUpdates] = useState<Update[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      const updatesCollection = collection(db, "updates");
      const updatesSnapshot = await getDocs(updatesCollection);
      const updatesList = updatesSnapshot.docs
        .map((doc) => {
          const { id, ...data } = doc.data() as Update;
          return { id: doc.id, ...data };
        })
        .sort((a, b) => {
          const aTime = a.timePosted?.seconds || 0;
          const bTime = b.timePosted?.seconds || 0;
          return bTime - aTime;
        });

      setUpdates(updatesList); // Set all updates
      setLoading(false);
    };

    fetchUpdates();
  }, []);

  if (loading) {
    return (
      <Box sx={{ maxWidth: 900, margin: "auto", padding: 2 }}>
        <Card elevation={0}>
          <CardHeader
            avatar={<Skeleton variant="circular" width={40} height={40} />}
            title={<Skeleton variant="text" width="60%" />}
            subheader={<Skeleton variant="text" width="40%" />}
          />
          <CardContent>
            <Skeleton variant="rectangular" height={118} />
          </CardContent>
        </Card>
      </Box>
    );
  }

  if (updates.length === 0) {
    return <div>No updates available.</div>; // Handle case with no updates
  }

  return (
    <Box sx={{ padding: 2 }}>
      <Stack spacing={4}>
        {updates.map((update) => (
          <UpdateCard
            key={update.id}
            heading={update.title}
            body={update.body}
            avatarSrc={getAvatarByAuthor(update.author)}
            author={update.author}
            time={update.timePosted || { seconds: 0, nanoseconds: 0 }} // Provide default value
            thumbnailSrc={update.thumbnailURL}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default UpdateCarousel;
