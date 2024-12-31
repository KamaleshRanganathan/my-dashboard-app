import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-center bg-base-100 border-t border-primary p-3">
      <p className="text-base-content">
        &copy; 2024 kamalesh R
        <span className="inline-block mx-3 text-center">
          <Heart size={16} />
        </span>
        All rights reserved.
      </p>
    </footer>
  );
}
