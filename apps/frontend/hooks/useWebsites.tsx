import { useAuth } from "@clerk/nextjs";
import { useEffect,useState } from "react";

interface Website {
    id: string;
    url: string;
    ticks:{
        id: string;
        createdAt: string;
        status: string;
        latency: number;
    }[];
}

export function useWebsites() {
  const { getToken } = useAuth();

  const [websites, setWebsites] = useState<Website[]>([]);

  async function refreshWebsites() {
    const token = await getToken();
    const res = await fetch("http://localhost:3000/api/v1/websites", {
      headers: {
        Authorization: token!,
      },
    });
    
    setWebsites(res.json());
  }

  useEffect(() => {
    refreshWebsites();

    const interval = setInterval(() => {
      refreshWebsites();
    }, 1000);

    return () => clearInterval(interval);
  }, []);
}
