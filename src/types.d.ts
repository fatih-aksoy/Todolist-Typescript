interface TodoType {
  todo: string;
  isDone: boolean;
  id: string | number;
}

type AddFn = (text: string) => Promise<void>;
type ToggleFn = (todo: TodoType) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;
