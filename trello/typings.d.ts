interface Board {
  columns: MAP<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
  id: TypedColumn;
  todos: Todo[];
}
// you can do extends Models.documents
interface Todo  {
  $id: string;
  $createdAt: string;
  title: string;
  status: string;
  image?: string;
}

interface Image {
  bucketId: string;
  fileId: string;
}
