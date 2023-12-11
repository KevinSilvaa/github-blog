// Styling Imports
import { SearchFormContainer, SearchFormHeading, SearchFormInput } from "./styles";

// Components Imports

// Strategic Imports
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchFormInputProps {
  postsLength: number;
  numberOfPostsText: string;
  fetchPosts: (query?: string) => Promise<void>;
}

export function SearchForm({ postsLength, fetchPosts, numberOfPostsText }: SearchFormInputProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearch(data: SearchFormInput) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    fetchPosts(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearch)}>
      <SearchFormHeading>
        <h2>Publicações</h2>
        <span>{postsLength} {numberOfPostsText}</span>
      </SearchFormHeading>

      <SearchFormInput
        type="text"
        placeholder="Buscar conteúdo"
        {...register("query")}
        disabled={isSubmitting}
      />

    </SearchFormContainer>
  );
}
