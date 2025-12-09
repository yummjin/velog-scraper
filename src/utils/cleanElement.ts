import * as cheerio from "cheerio";

export const cleanElement = ($element: ReturnType<cheerio.CheerioAPI>) => {
  $element
    .find("script, style, nav, header, footer, aside, button, iframe, form, a")
    .remove();
  $element
    .find(
      "[class*='nav'], [class*='user-logo'], [class*='sc-TBWPX dXONqK sc-brSvTw cgYvDI'], [class*='menu'], [class*='sidebar'], [class*='header'], [class*='footer']"
    )
    .remove();
  $element
    .find(
      "[class*='login'], [class*='signin'], [class*='signup'], [class*='auth']"
    )
    .remove();
  $element
    .find(
      "[class*='ad'], [class*='banner'], [class*='popup'], [class*='modal']"
    )
    .remove();
  $element
    .find(
      "[class*='comment'], [class*='tag'], [class*='author'], [class*='profile'], [class*='share'], [class*='follow']"
    )
    .remove();
  $element.find("[class*='meta'], [class*='info']").remove();
  return $element.text().trim().replace(/\s+/g, " ");
};

export const cleanSeriesElement = (
  $element: ReturnType<cheerio.CheerioAPI>
) => {
  return $element.text().trim().replace(/\s+/g, " ");
};
