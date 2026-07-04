type ArchitectureDiagramProps = {
  nodes: { id: string; label: string; x: number; y: number }[];
  edges: { from: string; to: string }[];
};

export function ArchitectureDiagram({ nodes, edges }: ArchitectureDiagramProps) {
  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <div className="crosshair-corners overflow-hidden rounded-[var(--radius-card)] bg-surface2 p-6 md:p-10">
      <svg
        viewBox="0 0 800 240"
        className="h-auto w-full"
        role="img"
        aria-label="System architecture diagram"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill="rgba(255,255,255,0.2)" />
          </marker>
        </defs>

        {edges.map((edge) => {
          const from = nodeMap[edge.from];
          const to = nodeMap[edge.to];
          if (!from || !to) return null;
          return (
            <line
              key={`${edge.from}-${edge.to}`}
              x1={from.x + 60}
              y1={from.y + 20}
              x2={to.x}
              y2={to.y + 20}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              markerEnd="url(#arrowhead)"
            />
          );
        })}

        {nodes.map((node) => (
          <g key={node.id}>
            <rect
              x={node.x}
              y={node.y}
              width="120"
              height="40"
              rx="6"
              fill="#111113"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            <text
              x={node.x + 60}
              y={node.y + 25}
              textAnchor="middle"
              fill="#A1A1AA"
              fontSize="11"
              fontFamily="var(--font-mono), monospace"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}