
import { APP_PATH_ROUTER, APP_PATH_ROUTER_SUBPATH } from "../globalConsts/globalEnum"

const normalize = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ') // убрать мусор типа - : T Z .
    .replace(/\s+/g, ' ')
    .trim()

export const extractStrings = (value: unknown): string[] => {
    if (value == null) return [];
    if (typeof value === "string") return [value];
    if (typeof value === "number" || typeof value === "boolean") {
      return [String(value)];
    }
    if (Array.isArray(value)) {
      return value.flatMap(extractStrings);
    }
    if (typeof value === "object") {
      return Object.values(value).flatMap(extractStrings);
    }
    return [];

};

export const searchElementsInArray = <T>(
  array: T[],
  request: string,
  extractor: (item: T) => Array<string | undefined | null>
): T[] => {
  const query = normalize(request);
  if (!query) return array;

  const queryWords = query.split(" ");

  return array.filter(item => {
    const values = extractor(item);

    return values.some(raw => {
      if (!raw) return false;

      const valueWords = normalize(raw).split(" ");

      return queryWords.every(qw =>
        valueWords.some(vw => vw.startsWith(qw))
      );
    });
  });
};
    
// export const searchElementsInArray = <T>(
//   array: T[],
//   request: string,
//   keyExtractors: Array<(item: T) => string | undefined | null>
// ): T[] => {
//   const query = normalize(request)
//   if (!query) return array

//   const queryWords = query.split(' ')

//   return array.filter(item =>
//     keyExtractors.some(extractor => {
//       const raw = extractor(item)
//       if (!raw) return false
//       const valueWords = normalize(raw).split(' ')

//       return queryWords.every(qw =>
//         valueWords.some(vw => vw.startsWith(qw))
//       )
//     })
//   )
// }

export const formattedDate = (date: string) => {
  const tempDate = new Date(date);
  return tempDate.toLocaleDateString('sv-SE');
};

export const cropContent = (content: string, maxLength: number): string => {
  if (content.length <= maxLength) {
    return content;
  }

  return content.slice(0, maxLength) + '...';
}
export function pickRandomUnique<T>(array: T[], count: number): T[] {
  if (count <= 0) return [];
  if (count >= array.length) return [...array];

  const result = [...array]; // копия
  const n = result.length;

  for (let i = 0; i < count; i++) {
    const randIndex = i + Math.floor(Math.random() * (n - i));

    // swap
    [result[i], result[randIndex]] = [result[randIndex], result[i]];
  }

  return result.slice(0, count);
}


export const routes = (locale: string) => {
  const prefix = `/${locale}`;

  return {
  articles: {
    root: `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.ARTICLES}`,
    create: () => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.ARTICLES}/create`,
    byId: (id: number | string) => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.ARTICLES}/${id}`,
    update: (id: number | string) => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.ARTICLES}/${id}/update`,
    edit: (id: number | string) => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.ARTICLES}/${id}/edit`,
  },
  library:{
    root: `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.LIBRARY}`,
    byId: (id: string) => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.LIBRARY}/${id}`,
    group: `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.LIBRARY}/group`,
    
    create: () => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.LIBRARY}/create`,
    update: (id: number | string) => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.LIBRARY}/${id}/update`,
    edit: (id: number | string) => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.LIBRARY}/${id}/edit`,
  },
  media: {
    root: `${prefix}${APP_PATH_ROUTER.MEDIA}`,
  },
  tests: {
    root: `${prefix}${APP_PATH_ROUTER.TESTS}`,
    byId: (id: number | string) => `${prefix}${APP_PATH_ROUTER.TESTS}/${id}`,
  },
  // faq: {
  //   root: `${prefix}${APP_PATH_ROUTER.FAQ}`,
  // },

  news: {
    root: `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.NEWS}`,
    byId: (id: number | string) => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.NEWS}/${id}`,
    edit: (id: number | string) => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.NEWS}/${id}/edit`,
    create: () => `${prefix}${APP_PATH_ROUTER.MEDIA}/${APP_PATH_ROUTER_SUBPATH.NEWS}/create`,
  },
  // pricing:{
  //   root: `${prefix}${APP_PATH_ROUTER.PRICING}`,
  // },
  search: {
    root: `${prefix}/search`,
    byTypeAndQuery: (type: string, query: string) => `${prefix}/search/${type}/${query}`,
  },
  about: {
    root: `${prefix}${APP_PATH_ROUTER.ABOUT}`,
  },
  users:{
    root: `${prefix}${APP_PATH_ROUTER.USERS}`,
    byId: (id: number | string) => `${prefix}${APP_PATH_ROUTER.USERS}/${id}`,
  },
  consultation: {
    root: `${prefix}${APP_PATH_ROUTER.CONSULTATION}`,
    byId: (id: number | string) => `${prefix}${APP_PATH_ROUTER.CONSULTATION}/${id}`,
  },
}}