import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export interface Category {
  name: string;
  slug: string;
  icon: string;
  description: string;
  count: number;
}

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link href={`/${category.slug}`}>
      <Card className="group cursor-pointer border border-gray-200 py-0 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-blue-200">
        <CardContent className="flex flex-col items-center gap-1.5 p-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl transition-colors group-hover:bg-blue-100">
            {category.icon}
          </div>
          <h3 className="font-bold text-gray-900 text-sm">{category.name}</h3>
          {category.count > 0 && (
            <span className="text-xs text-blue-600 font-medium">
              {category.count}개 가이드
            </span>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
