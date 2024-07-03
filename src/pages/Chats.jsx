import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Settings } from "lucide-react";

const Chats = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-semibold">Chat Name</h2>
        <Button variant="outline" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </header>
      <ScrollArea className="flex-1 p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className="p-2 bg-muted rounded-lg">
            {message}
          </div>
        ))}
      </ScrollArea>
      <footer className="p-4 border-t flex items-center space-x-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </footer>
    </div>
  );
};

export default Chats;