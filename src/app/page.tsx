const mockUrls = [
  "https://utfs.io/f/K8bLgRxocD0egm5T3ZKQd2Ai36rDKlpLHmn5ck4FsSyJV9I1",
  "https://utfs.io/f/K8bLgRxocD0e6k8DsrWGkMVyvzUd4Pn7bN3HpO19oufJjlLC",
  "https://utfs.io/f/K8bLgRxocD0exFTeOmsamn5zh6XcRirZ8BbsC0wogK9lFTxH",
  "https://utfs.io/f/K8bLgRxocD0ee0aa78YYzfM3y6aLhEXsmSx1T8lNpAvGWFIo",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
