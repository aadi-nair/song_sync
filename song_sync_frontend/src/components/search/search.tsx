import { useRef } from "react";
import { Button } from "../button/button";
import "./search.css";
import { Input } from "@/components/input/input";

function Search({
  placeholder = "Search..",
  onSubmit,
}: {
  placeholder?: string;
  onSubmit: (query: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={`flex-row align-center`}>
      <Input ref={inputRef} placeholder={placeholder} className="searchInput" />
      <Button
        onClick={() => {
          onSubmit(inputRef.current?.value ?? "");
        }}
      >
        Search
      </Button>
    </div>
  );
}

export default Search;
