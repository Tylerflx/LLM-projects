import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun, MoonStar } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme } from "../redux/reducer/themeModeReducer";

const ModeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.value);

  //system theme
  const handleSystemTheme = () => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    
      if (mq.matches) {
        //update theme
        dispatch(setDarkTheme(true));
      }
      else{
        dispatch(setDarkTheme(false));
      }

  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={darkMode ? "dark" : "outline"} size="icon">
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          ) : (
            <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="">
        <DropdownMenuItem onClick={() => dispatch(setDarkTheme(false))}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch(setDarkTheme(true))}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleSystemTheme()}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
