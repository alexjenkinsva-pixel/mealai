import { pingHealthCheck } from './actions';

export default async function Home() {
  // ... existing code above
  return (
    <main className="min-h-dvh bg-gray-50 p-8">
      {/* ...existing UI */}
      <form
        action={async () => {
          'use server';
          await pingHealthCheck();
        }}
        className="mt-4"
      >
        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white text-sm"
        >
          Insert health_check row
        </button>
      </form>
    </main>
  );
}
