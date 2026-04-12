import { ChatInterface } from "@/components/chat/ChatInterface";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat About Me | Gayatri Dittakavi",
  description:
    "Ask an AI assistant anything about Gayatri — her work, research, projects, skills, and interests.",
};

export default function ChatPage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <ChatInterface />
    </div>
  );
}
