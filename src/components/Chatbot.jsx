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

  const quickQuestions = [
    "Shipping",
    "Returns",
    "Cart help",
    "Wishlist",
  ];

  const getBotResponse = (message) => {
    const text = message.toLowerCase();

    if (
      text.includes("hello") ||
      text.includes("hi") ||
      text.includes("hey")
    ) {
      return "Hello! 👋 How can I help you today?";
    }

    if (
      text.includes("shipping") ||
      text.includes("delivery")
    ) {
      return "🚚 Standard delivery usually takes 3–7 business days.";
    }

    if (
      text.includes("return") ||
      text.includes("refund")
    ) {
      return "↩️ Products can generally be returned within 30 days of delivery.";
    }

    if (text.includes("cart")) {
      return "🛒 You can manage your cart from the cart icon in the navbar. You can increase, decrease or remove products there.";
    }

    if (
      text.includes("wishlist") ||
      text.includes("favorite")
    ) {
      return "❤️ Click the heart icon on any product to add it to your wishlist.";
    }

    if (
      text.includes("payment") ||
      text.includes("pay")
    ) {
      return "💳 Available payment methods will be displayed during checkout.";
    }

    if (
      text.includes("product") ||
      text.includes("products")
    ) {
      return "🛍️ You can browse all products from the Products page and use search or category filters.";
    }

    if (
      text.includes("contact") ||
      text.includes("support")
    ) {
      return "💬 You're already talking to ShopAssist! For additional support, please use the support option at checkout.";
    }

    return "😊 I can help with products, shipping, returns, payments, your cart and wishlist.";
  };

  const sendMessage = (customMessage = null) => {
    const messageText = customMessage || input;

    if (!messageText.trim()) return;

    const userMessage = {
      sender: "user",
      text: messageText,
    };

    const botMessage = {
      sender: "bot",
      text: getBotResponse(messageText),
    };

    setMessages((previous) => [
      ...previous,
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
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[60] flex h-[520px] w-[calc(100%-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/90 shadow-2xl shadow-black/60 backdrop-blur-2xl sm:right-6">

          {/* Header */}
          <div className="border-b border-white/10 bg-white/[0.04] p-5">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 text-xl">
                  🤖
                </div>

                <div>
                  <h3 className="font-bold">
                    ShopAssist
                  </h3>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                    <span className="text-xs text-slate-500">
                      Online
                    </span>
                  </div>
                </div>

              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-xl text-slate-400 hover:bg-white/5 hover:text-white"
              >
                ×
              </button>

            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto bg-black/10 p-4">

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
                  className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-5 ${
                    message.sender === "user"
                      ? "rounded-br-sm bg-indigo-600 text-white shadow-lg shadow-indigo-600/10"
                      : "rounded-bl-sm border border-white/10 bg-white/[0.05] text-slate-300"
                  }`}
                >
                  {message.text}
                </div>

              </div>
            ))}

          </div>

          {/* Quick questions */}
          <div className="border-t border-white/5 bg-white/[0.02] px-3 py-2">

            <div className="flex gap-2 overflow-x-auto">

              {quickQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() =>
                    sendMessage(question)
                  }
                  className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-400 transition hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-indigo-300"
                >
                  {question}
                </button>
              ))}

            </div>

          </div>

          {/* Input */}
          <div className="flex gap-2 border-t border-white/10 bg-white/[0.03] p-3">

            <input
              type="text"
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={handleKeyDown}
              placeholder="Ask something..."
              className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-600 focus:border-indigo-500"
            />

            <button
              onClick={() => sendMessage()}
              className="rounded-xl bg-indigo-600 px-4 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
            >
              ➤
            </button>

          </div>

        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-indigo-600 text-2xl shadow-2xl shadow-indigo-900/40 transition duration-300 hover:scale-110 hover:bg-indigo-500"
      >
        {isOpen ? "×" : "💬"}
      </button>
    </>
  );
}

export default ChatBot;