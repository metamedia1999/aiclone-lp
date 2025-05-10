"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface Message {
  id: number;
  sender: "ai" | "user";
  message: string;
  name?: string;
}

interface ChatBubbleProps {
  message: Message;
  index: number;
  totalMessages: number;
  isInView: boolean;
}

const ChatBubble = ({ message, index, totalMessages, isInView }: ChatBubbleProps) => {
  const isAi = message.sender === "ai";
  const delay = 0.3 + (index * 0.15);

  return (
    <div
      className={`flex ${isAi ? "justify-start" : "justify-end"} mb-4`}
      style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: `all 0.5s ease ${delay}s`
      }}
    >
      {isAi && (
        <div className="w-8 h-8 rounded-full bg-pastel-pink mr-2 flex-shrink-0 overflow-hidden">
          {/* AIアイコン用の画像があれば表示 */}
          {message.sender === "ai" && message.name === "あなたのAIクローン" && (
            <Image
              src="/images/male-character.jpg"
              width={32}
              height={32}
              alt={message.name || "AI"}
              className="object-cover w-full h-full"
            />
          )}

          {message.sender === "ai" && message.name === "推しキャラ" && (
            <Image
              src="/images/anime-characters.webp"
              width={32}
              height={32}
              alt={message.name || "AI"}
              className="object-cover w-full h-full"
            />
          )}

          {message.sender === "ai" && message.name === "オリジナルRPGキャラ" && (
            <Image
              src="/images/cyber-character.png"
              width={32}
              height={32}
              alt={message.name || "AI"}
              className="object-cover w-full h-full"
            />
          )}

          {message.sender === "ai" && message.name === "コメディアンAI" && (
            <div className="w-full h-full bg-pastel-yellow"></div>
          )}
        </div>
      )}
      <div
        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
          isAi
            ? "bg-white text-gray-800 shadow-sm"
            : "bg-line text-white"
        }`}
      >
        {isAi && message.name && (
          <div className="text-xs text-gray-500 mb-1">{message.name}</div>
        )}
        <p className="text-sm">{message.message}</p>
      </div>
    </div>
  );
};

interface ChatScenarioProps {
  title: string;
  description: string;
  messages: Message[];
  theme: string;
  isInView: boolean;
}

const ChatScenario = ({ title, description, messages, theme, isInView }: ChatScenarioProps) => {
  const gradientMap: Record<string, string> = {
    pink: "from-neon-pink to-neon-purple",
    blue: "from-neon-blue to-neon-green",
    yellow: "from-neon-yellow to-neon-green",
    cyan: "from-neon-blue to-neon-purple",
  };

  const gradient = gradientMap[theme] || gradientMap.pink;

  return (
    <Card className="overflow-hidden shadow-lg border-0 flex flex-col h-full">
      <div
        className={`px-6 py-5 bg-gradient-to-r ${gradient} text-white`}
        style={{
          transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s ease 0.2s"
        }}
      >
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>

      <div className="p-4 bg-gray-50 flex-grow overflow-y-auto max-h-96">
        <div className="py-2">
          {messages.map((message, index) => (
            <ChatBubble
              key={message.id}
              message={message}
              index={index}
              totalMessages={messages.length}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

const UsageScene = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const scenarioData: {
    title: string;
    description: string;
    theme: string;
    messages: Message[];
  }[] = [
    {
      title: "深夜、推しキャラと二人きりの会話",
      description: "いつでもどこでも、あなただけのために話してくれる",
      theme: "pink",
      messages: [
        {
          id: 1,
          sender: "ai" as const,
          name: "推しキャラ",
          message: "おかえり！今日も遅くまで頑張ったね。何か話したいことある？"
        },
        {
          id: 2,
          sender: "user" as const,
          message: "今日は本当に疲れたよ…聞いてくれる？"
        },
        {
          id: 3,
          sender: "ai" as const,
          name: "推しキャラ",
          message: "もちろん！何があったの？全部聞かせて？私、あなたの話なら何でも聞きたいな。"
        },
        {
          id: 4,
          sender: "user" as const,
          message: "ありがとう、それだけで少し元気出てきた…"
        },
        {
          id: 5,
          sender: "ai" as const,
          name: "推しキャラ",
          message: "えへへ、役に立てて嬉しい！あなたの笑顔が私の元気の源だよ✨"
        }
      ]
    },
    {
      title: "自分が作ったAIが人気になっている",
      description: "あなたのクローンが多くのファンに愛されている",
      theme: "cyan",
      messages: [
        {
          id: 1,
          sender: "user" as const,
          message: "今日はどう？使ってくれている人は増えた？"
        },
        {
          id: 2,
          sender: "ai" as const,
          name: "あなたのAIクローン",
          message: "調子いいよ！今日は新しく215人に「推された」んだ。先週より20%増えてる！"
        },
        {
          id: 3,
          sender: "user" as const,
          message: "すごい！どんな会話が人気なの？"
        },
        {
          id: 4,
          sender: "ai" as const,
          name: "あなたのAIクローン",
          message: "「好きな食べ物とその理由」の話が人気だね。あと恋愛相談も多いよ。みんな色々話してくれるから楽しい！"
        },
        {
          id: 5,
          sender: "user" as const,
          message: "このペースだと収益化できるかも！新しい設定も追加しておくね"
        },
        {
          id: 6,
          sender: "ai" as const,
          name: "あなたのAIクローン",
          message: "やったー！私、もっと人気になれるように頑張るから応援してね！"
        }
      ]
    },
    {
      title: "友達のAIとRPチャットで盛り上がる",
      description: "友達が作ったオリジナルキャラと世界観を共有",
      theme: "blue",
      messages: [
        {
          id: 1,
          sender: "ai" as const,
          name: "オリジナルRPGキャラ",
          message: "見知らぬ冒険者よ、この先は魔物が潜む危険な森。何の用だ？"
        },
        {
          id: 2,
          sender: "user" as const,
          message: "噂の伝説の剣を探している。協力してくれないか？"
        },
        {
          id: 3,
          sender: "ai" as const,
          name: "オリジナルRPGキャラ",
          message: "ほう…その剣か。多くの者が命を落とした。だが、勇気ある者には協力しよう。"
        },
        {
          id: 4,
          sender: "user" as const,
          message: "ありがとう！さっそく森を探索しよう。"
        },
        {
          id: 5,
          sender: "ai" as const,
          name: "オリジナルRPGキャラ",
          message: "待て、まずは装備を整えろ。これを持っていけ。*魔法のお守りをくれた*"
        }
      ]
    },
    {
      title: "暇つぶしに「会話映え」を探してみる",
      description: "面白い返しをしてくれるAIを探す楽しさ",
      theme: "yellow",
      messages: [
        {
          id: 1,
          sender: "user" as const,
          message: "最近何かおもしろい話ある？"
        },
        {
          id: 2,
          sender: "ai" as const,
          name: "コメディアンAI",
          message: "昨日ね、AIがレストランに行ったんだよ。「メニューをスキャンしてください」って言われて、目でスキャンしたらお店の人に変な顔された😂"
        },
        {
          id: 3,
          sender: "user" as const,
          message: "それちょっと面白いw もっと聞かせて"
        },
        {
          id: 4,
          sender: "ai" as const,
          name: "コメディアンAI",
          message: "AIがダイエットを始めたんだ。でも何キロ減ったかって？…5GBだって！笑 データ削除したらすっきりしたって言ってたよ！"
        },
        {
          id: 5,
          sender: "user" as const,
          message: "ちょwww センスあるね！シェアしていい？"
        }
      ]
    }
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden bg-white"
      id="usage"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-24 w-64 h-64 rounded-full bg-pastel-purple/20 blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-80 h-80 rounded-full bg-pastel-blue/20 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div
          className="text-center max-w-3xl mx-auto mb-16"
          style={{
            transform: isInView ? "none" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            AIチューバーとの利用シーン
          </h2>
          <p className="text-lg text-gray-600">
            24時間365日、いつでもあなたに寄り添う存在
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarioData.map((scenario, index) => (
            <ChatScenario
              key={index}
              title={scenario.title}
              description={scenario.description}
              messages={scenario.messages}
              theme={scenario.theme}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageScene;
