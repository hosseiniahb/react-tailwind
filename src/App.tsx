import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout";
import { ChannelDetail, Feed, SearchFeed, VideoDetail } from "./pages";

const App = () => (
  <BrowserRouter>
    <main className="min-h-screen w-full dark:bg-dark">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:channelId" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
