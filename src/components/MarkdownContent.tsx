import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

type MarkdownContentProps = {
  content: string;
};

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="blog-prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null;

            if (src.startsWith("/")) {
              return (
                <span className="my-8 block overflow-hidden rounded-[var(--radius-card)] border border-border">
                  <Image
                    src={src}
                    alt={alt ?? ""}
                    width={1140}
                    height={640}
                    className="h-auto w-full"
                    sizes="(max-width: 768px) 100vw, 1140px"
                  />
                </span>
              );
            }

            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={alt ?? ""} className="rounded-[var(--radius-card)]" />
            );
          },
          a: ({ href, children }) => (
            <a
              href={href}
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-accent link-underline transition-colors hover:brightness-110"
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}