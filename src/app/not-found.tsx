import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center section-padding pt-32">
      <div className="container-content text-center">
        <p className="font-mono-label mb-4 text-muted">404</p>
        <h1 className="font-display text-section font-semibold text-text">
          Page not found.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-text2">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back home
          </Button>
        </div>
      </div>
    </section>
  );
}