import { createContext, useState } from "react";
import { STAGE } from "../utils/StageData";

export const FileContext = createContext();

/*
Хранит состояние MainView (STAGE) и может его изменять
Хранит текущий рассматриваемый объект, вернувшийся из запроса (CurrentResult) и может его изменять

*/