declare module "url-safe-string" {
  export = UrlSafeString;

  class UrlSafeString {
    constructor(options?: UrlSafeString.UrlSafeStringOptions);
    generate(...args: string[]): string;
  }

  namespace UrlSafeString {
    interface UrlSafeStringOptions {
      /**
       * truncates beyond maxLen
       * @default 100
       */
      maxLen?: number;
      /**
       * @default true
       */
      lowercaseOnly?: boolean;
      /**
       * matches opposite of [a-z0-9]
       * @default /((?!([a-z0-9])).)/gi
       */
      regexRemovePattern?: RegExp;
      /**
       * e.g. - may be: '-', '_', '#'
       * @default "-"
       */
      joinString?: string;
      /**
       * @default true
       */
      trimWhitespace?: boolean;
    }
  }
}