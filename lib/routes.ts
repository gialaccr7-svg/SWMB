import { vehiclePath, articlePath, categoryPath } from '@/lib/paths';
import { seatCounts } from './catalog';
import { findVehicles } from './services/vehicle-service';
import { listArticles } from './services/article-service';
import { destinations, destinationPath } from './content/destinations';
import { seatRouteCounts, seatRouteDestinations, seatRoutePath } from './content/seat-routes';
import { rentalCategoryUpdatedAt } from './content/rental-categories';
import { seatRouteUpdatedAt } from './content/seat-route-trip-tips';

/** Indexable paths only. Filter queries and API endpoints never enter the sitemap. */
export function publicPages() {
  return [
    ...[
      '/',
      '/doi-xe',
      '/bang-gia',
      '/dich-vu',
      '/xe-cuoi',
      '/kinh-nghiem',
      '/gioi-thieu',
      '/chinh-sach',
      '/bao-mat',
    ].map((path) => ({
      path,
      lastModified: ['/bang-gia', '/dich-vu', '/xe-cuoi', '/kinh-nghiem'].includes(path)
        ? '2026-11-27'
        : undefined,
    })),
    ...destinations.map((item) => ({
      path: destinationPath(item.slug),
      lastModified: item.updatedAt,
    })),
    ...seatRouteDestinations.flatMap((destination) =>
      seatRouteCounts.map((seats) => ({
        path: seatRoutePath(seats, destination.slug),
        lastModified: seatRouteUpdatedAt,
      })),
    ),
    ...findVehicles().map((vehicle) => ({
      path: vehiclePath(vehicle.slug),
      lastModified: vehicle.updatedAt,
    })),
    ...seatCounts.map((seats) => ({
      path: categoryPath(seats),
      lastModified: rentalCategoryUpdatedAt,
    })),
    ...listArticles().map((article) => ({
      path: articlePath(article.slug),
      lastModified: article.updatedAt ?? article.date,
    })),
  ];
}
