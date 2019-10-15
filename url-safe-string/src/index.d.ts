declare module "url-safe-string" {
  export = UrlSafeString;

  class UrlSafeString {
    constructor(options?: UrlSafeString.UrlSafeStringOptions);
    generate(...args: string[]): string;
  }

  namespace UrlSafeString {
    interface UrlSafeStringOptions {
      maxLen?: number;
      lowercaseOnly?: boolean;
      regexRemovePattern?: RegExp;
      joinString?: string;
      trimWhitespace?: boolean;
    }
  }
}