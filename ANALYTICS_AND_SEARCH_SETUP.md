# Analytics and search setup

The website code tracks page views and these download types once Google Analytics is connected:

- original Excel workbook;
- filtered CSV;
- individual-article CSV; and
- grouped CSV, including the group type and name.

## Activate Google Analytics 4

1. Create a GA4 web data stream for `https://adrijaeco.github.io/Intercropping/`.
2. Copy its Measurement ID (format: `G-XXXXXXXXXX`).
3. In `index.html` and each file in `topics/`, replace the empty value in:

   ```html
   <meta name="google-analytics-id" content="">
   ```

4. Deploy the site. The consent banner appears only when a valid Measurement ID is present.
5. In GA4, use **Reports → Engagement → Events → file_download**. Custom parameters are available for download type, article, group, and record count; register any needed parameters as custom dimensions/metrics for standard reporting.

Analytics starts collecting after activation and cannot recreate older website traffic. The linked Zenodo record maintains separate Zenodo views and downloads.

## Activate Google Search Console

1. Add the URL-prefix property `https://adrijaeco.github.io/Intercropping/`.
2. Select the HTML-tag verification method.
3. Paste only the token supplied by Google into `content` for `google-site-verification` in `index.html`.
4. Deploy, then click **Verify** in Search Console.
5. Submit `https://adrijaeco.github.io/Intercropping/sitemap.xml` in the Sitemaps report.
6. Inspect the home-page URL and request indexing.

The site already includes canonical URLs, crawl rules, a sitemap, Dataset structured data, descriptive search metadata, and static topic pages.
