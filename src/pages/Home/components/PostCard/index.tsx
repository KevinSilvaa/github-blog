// Styling Imports
import { PostProps } from "../..";
import { PostCardContainer } from "./styles";

// Strategic Imports

export function PostCard({ data }: PostProps) {

  return (
    <PostCardContainer>
      <h1>{data.title}</h1>
    </PostCardContainer>
  );
}
