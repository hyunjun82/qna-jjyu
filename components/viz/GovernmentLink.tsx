"use client";

interface GovernmentLinkProps {
  links: { name: string; description: string; url?: string; urlLabel?: string; phone?: string }[];
}

export function GovernmentLink({ links }: GovernmentLinkProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {links.map((link, i) => (
        <div key={i} className="rounded-lg border border-gov-200 bg-white p-4 shadow-sm">
          <h4 className="font-semibold text-gov-800">{link.name}</h4>
          <p className="mt-1 text-sm text-gray-600">{link.description}</p>
          <div className="mt-3 flex flex-wrap gap-3 text-sm">
            {link.url && (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gov-600 hover:underline"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {link.urlLabel || "바로가기"}
              </a>
            )}
            {link.phone && (
              <span className="text-gray-600">Tel: {link.phone}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
