import { database } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
  const data = await database.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_COLLECTION_ID!
  );
//   console.log(data);
  const todos = data.documents;

  const columns = todos.reduce((acc, todo) => {
    // if status not exist create id with status and todos []
    if (!acc.get(todo.status)) {
      acc.set(todo.status, {
        id: todo.status,
        todos: [],
      });
    }

    //if todo status already exist push it in the same array
    acc.get(todo.status)!.todos.push({
      $id: todo.$id,
      $createdAt: todo.$createdAt,
      title: todo.title,
      status: todo.status,
      // get the image if it exists
      ...(todo.image && { image: JSON.parse(todo.image) }),
    });
    return acc;
    //new Map objects are collections of key-value pairs
  }, new Map<TypedColumn, Column>());

  // if columns doesnt have one of neum status add them with empty todos
  const columnTypes: TypedColumn[] = ["todo", "inprogress", "done"];
  //step 1 : forEach columns types
  for (const columnType of columnTypes) {
    //step 2 : if column type dosent exist in column
    if (!columns.get(columnType)) {
      //step 3 : add column type with empty array to columns
      columns.set(columnType, {
        id: columnType,
        todos: [],
      });
    }
  }
  //   console.log(columns)
  //sort columns by types
  //sorted with this order "todo", "inprogress", "done"
  const sortedColumns = new Map(
    Array.from(columns.entries()).sort(
      (a, b) => columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    )
  );
  const board : Board={
    columns : sortedColumns
  }
  return board
};
