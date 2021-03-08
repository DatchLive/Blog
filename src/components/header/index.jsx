import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-green-400">
      <h1 className="text-4xl text-white uppercase"> Wise Life Log</h1>
      <h2 className="text-white">〜賢く生きるための情報を発信！〜</h2>
      <div>
        <button>
          <svg className="h-6 w-6 " viewBox="0 0 24 24">
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </button>
      </div>
    </header>
  );
};
