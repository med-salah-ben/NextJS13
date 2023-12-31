"use client";
import { useBoardStore } from "@/store/BoardStore";
import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const Board = () => {
  const [board, getBoard] = useBoardStore((state) => [
    state.board,
    state.getBoard,
  ]);
  console.log("board : ", board);
  useEffect(() => {
    getBoard();
  }, [getBoard]);
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
          {...provided.droppableProps}
          ref={provided.innerRef}
          >
            {/* Rendering all the columns */}
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Board;
