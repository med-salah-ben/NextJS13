import TodosList from "./TodosList";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "A Todo",
    description: "Generated The Todo Page by create next app",
  };

//like outlet react router
//create root layout to show and return TodoID in the same page with Todos
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>
        <TodosList />
      </div>
      <div className="flex-1"> {children} </div>
    </main>
  );
}
