import { useState } from "react";

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I'm ShopAssist. How can I help you?",
    },
  ]);

  const [input, setInput] = useState("");

  const getBotResponse = (message) => {
    const text = message.toLowerCase();

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hello! 👋 How can I help you with your shopping?";
    }

    if (text.includes("cart")) {
      return "You can manage your cart by clicking the 🛒 icon at the top of the page.";
    }

    if (text.includes("add")) {
      return "To add a product, open a product and click the 'Add to Cart' button.";
    }

    if (text.includes("remove")) {
      return "Open your cart and click 'Remove' next to the product.";
    }

    if (
      text.includes("delivery") ||
      text.includes("shipping")
    ) {
      return "Standard delivery usually takes 3–7 business days.";
    }

    if (
      text.includes("return") ||
      text.includes("refund")
    ) {
      return "Our standard return window is 30 days from delivery.";
    }

    if (
      text.includes("wishlist") ||
      text.includes("favorite")
    ) {
      return "Click ❤️ on a product to add it to your wishlist.";
    }

    if (
      text.includes("payment") ||
      text.includes("pay")
    ) {
      return "You can choose from the available payment methods during checkout.";
    }

    if (
      text.includes("contact") ||
      text.includes("support")
    ) {
      return "You can contact our support team through the checkout support option.";
    }

    return "I can help with products, cart, wishlist, delivery, returns and payments. 😊";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const botMessage = {
      sender: "bot",
      text: getBotResponse(input),
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      botMessage,
    ]);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[500px] w-[calc(100%-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:right-6">

          {/* Header */}
          <div className="flex items-center justify-between bg-slate-900 px-5 py-4 text-white">

            <div>
              <h3 className="font-bold">
                ShopAssist 🤖
              </h3>

              <p className="text-xs text-slate-400">
                Online Support
              </p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-slate-300 hover:text-white"
            >
              ×
            </button>

          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-slate-50 p-4">

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-5 ${
                    message.sender === "user"
                      ? "rounded-br-none bg-indigo-600 text-white"
                      : "rounded-bl-none bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

          </div>

          {/* Input */}
          <div className="flex gap-2 border-t bg-white p-3">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask something..."
              className="min-w-0 flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            <button
              onClick={sendMessage}
              className="rounded-lg bg-indigo-600 px-4 text-white transition hover:bg-indigo-700"
            >
              ➤
            </button>

          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-2xl text-white shadow-xl transition hover:scale-110 hover:bg-indigo-700"
      >
        {isOpen ? "×" : "💬"}
      </button>
    </>
  );
}

export default ChatBot;