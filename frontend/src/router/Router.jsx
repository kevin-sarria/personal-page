import { Routes, Route } from "react-router-dom";
import { HomePage } from "../accessPublic";

export const Router = () => {
  return (
    <Routes>

        <Route path="/" element={<HomePage />} />

    </Routes>
  )
}
