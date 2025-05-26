import { Card } from "@/components/Porfile/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/Porfile/tab";
import Image from "next/image";

// interface UserProfileProps {
//   user: {
//     username: string;
//     displayName: string;
//     bio?: string;
//     website?: string;
//     img?: string;
//   };
//   posts: { id: string; desc: string; img?: string }[];
//   followers: {
//     id: string;
//     displayName: string;
//     username: string;
//     img?: string;
//   }[];
//   followings: {
//     id: string;
//     displayName: string;
//     username: string;
//     img?: string;
//   }[];
// }
const UserProfile = async () => {
  const user = {
    username: "johndoe",
    displayName: "John Doe",
    bio: "Full Stack Developer. Love React and Next.js.",
    website: "https://johndoe.dev",
    img: "https://ik.imagekit.io/nssbtemyw/tr:w-100,h-100/general/Screenshot%202025-05-26%20152414.png?updatedAt=1748272105185",
  };

  const posts = [
    {
      id: "post1",
      desc: "Just finished my portfolio! 🚀",
      img: "https://ik.imagekit.io/nssbtemyw/tr:h-600,w-600/general/post.jpeg",
    },
    {
      id: "post2",
      desc: "Loving Next.js 15 and React 19!",
    },
  ];

  const followers = [
    {
      id: "user1",
      username: "janedoe",
      displayName: "Jane Doe",
      img: "https://ik.imagekit.io/nssbtemyw/tr:w-100,h-100/general/Screenshot%202025-05-26%20152414.png?updatedAt=1748272105185",
    },
    {
      id: "user2",
      username: "alice",
      displayName: "Alice Smith",
      img: "https://ik.imagekit.io/nssbtemyw/tr:w-100,h-100/general/Screenshot%202025-05-26%20152414.png?updatedAt=1748272105185",
    },
  ];

  const followings = [
    {
      id: "user3",
      username: "bob",
      displayName: "Bob Johnson",
      img: "https://ik.imagekit.io/nssbtemyw/tr:w-100,h-100/general/Screenshot%202025-05-26%20152414.png?updatedAt=1748272105185",
    },
  ];
  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="p-6 flex flex-col items-center text-center">
        <div className="rounded-full border-4 border-yellow-400 p-1">
          <Image
            src={user.img || "/default-avatar.png"}
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
        <p className="text-sm text-gray-500 mt-2">@{user.username}</p>
        <h2 className="text-xl font-semibold">{user.displayName}</h2>
        <p className="text-gray-600 mt-1">{user.bio || "No bio available"}</p>
        {user.website && (
          <a
            href={user.website}
            className="mt-2 text-sm text-purple-600 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.website.replace("https://", "")}
          </a>
        )}
      </Card>

      <Tabs defaultValue="posts" className="mt-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="posts">Posts</TabsTrigger>
          <TabsTrigger value="followers">Followers</TabsTrigger>
          <TabsTrigger value="followings">Following</TabsTrigger>
        </TabsList>

        <TabsContent value="posts">
          <div className="grid grid-cols-1 gap-4 mt-4">
            {posts.length === 0 ? (
              <p className="text-center text-gray-500">No posts yet.</p>
            ) : (
              posts.map((post) => (
                <Card key={post.id} className="p-4">
                  <p>{post.desc}</p>
                  {post.img && (
                    <Image
                      src={post.img}
                      alt="post"
                      width={400}
                      height={300}
                      className="rounded mt-2"
                    />
                  )}
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="followers">
          <div className="space-y-4 mt-4">
            {followers.length === 0 ? (
              <p className="text-center text-gray-500">No followers yet.</p>
            ) : (
              followers.map((f) => (
                <Card key={f.id} className="p-3 flex items-center gap-3">
                  <Image
                    src={f.img || "/default-avatar.png"}
                    alt="follower"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">{f.displayName}</p>
                    <p className="text-sm text-gray-500">@{f.username}</p>
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="followings">
          <div className="space-y-4 mt-4">
            {followings.length === 0 ? (
              <p className="text-center text-gray-500">Not following anyone.</p>
            ) : (
              followings.map((f) => (
                <Card key={f.id} className="p-3 flex items-center gap-3">
                  <Image
                    src={f.img || "/default-avatar.png"}
                    alt="following"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-medium">{f.displayName}</p>
                    <p className="text-sm text-gray-500">@{f.username}</p>
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default UserProfile;
