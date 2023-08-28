import camelCase from "lodash.camelcase";
import tokens from "./_generated/tokens.module";

// Colors //
const colors = extractNestedTokens(tokens, "colors", "colors");
colors["transparent"] = "transparent";

// Border radius //
const borderRadius = extractNestedTokens(
  tokens,
  "borderRadius",
  "border-radius"
);

// Font //
const fonFamilies = getFontFamiliesFromTokens(tokens);

const fontSizes = extractSimpleTokens(tokens?.fontSize, "fontSize");

const lineHeights = extractSimpleTokens(
  tokens?.lineHeights,
  "lineHeights",
  "px"
);

const fontWeights = extractSimpleTokens(tokens?.fontWeights, "fontWeights");

const letterSpacing = extractSimpleTokens(
  tokens?.letterSpacing,
  "letterSpacing"
);

// Spacing //
const spacing = getSpacingFromTokens(tokens);

// Screen //
const screen = extractSimpleTokens(tokens?.screen, "screen");

// AuspectRatio //
const aspectRatio = extractSimpleTokens(tokens?.aspectRatio, "aspectRatio");

export function getTailwindConfig({ content }) {
  return {
    content: content || ["**/*.{js,css}"],
    separator: "_",
    theme: {
      colors: {
        ...colors,
      },
      fontFamily: fonFamilies,
      fontSize: fontSizes,
      lineHeight: lineHeights,
      fontWeight: { ...fontWeights, bold: 700 },
      screens: screen,
      aspectRatio: aspectRatio,
      textUnderlineOffset: {
        lg: "6px",
        base: "5px",
        sm: "4px",
        xs: "3px",
        xxs: "2px",
      },
      extend: {
        borderRadius: borderRadius,
        letterSpacing: letterSpacing,
        spacing: spacing,
        keyframes: {
          slideDown: {
            "0%": { opacity: "0", transform: "translateY(-100%)" },
            "100%": { opacity: "1", transform: "translateY(0)" },
          },
          slideUp: {
            "0%": { opacity: "1", transform: "translateY(0)" },
            "100%": { opacity: "0", transform: "translateY(-100%)" },
          },
          slideOutLeft: {
            "0%": { left: "-100%" },
            "100%": { left: 0 },
          },
          slideBackLeft: {
            "0%": { left: 0 },
            "100%": { left: "-100%" },
          },
          appear: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          disappear: {
            "0%": { opacity: 1 },
            "100%": { opacity: 0 },
          },
        },
        animation: {
          slideDown: "slideDown 0.5s ease-in-out",
          slideUp: "slideUp 0.5s ease-in-out",
          slideOutLeft: "slideOutLeft 0.3s ease-in-out forwards",
          slideBackLeft: "slideBackLeft 0.3s ease-in-out forwards",
          appear: "appear 0.3s ease-in-out forwards",
          disappear: "disappear 0.3s ease-in-out forwards",
        },
        transitionProperty: {
          background: "background",
          left: "left",
          boxShadow: "box-shadow",
        },
        minHeight: spacing,
        maxHeight: spacing,
        maxWidth: { ...spacing, sm: screen.sm, md: screen.md, lg: screen.lg },
        minWidth: spacing,
        content: {
          empty: '" "',
        },
        scale: {
          100: "100%",
        },
        top: spacing,
        right: spacing,
        bottom: spacing,
        left: spacing,
        backgroundSize: {
          // Used by link component
          "0-1": "0 1px",
          "100-1": "100% 1px",
          "0-2": "0 2px",
          "100-2": "100% 2px",
        },
        boxShadow: {
          "accent200-0": `inset 0 0px 0 0 ${colors.accent200}`,
          "accent200-bottom-12": `inset 0 -12px 0 0 ${colors.accent200}`,
          "accent300-bottom-12": `inset 0 -12px 0 0 ${colors.accent300}`,
          "accent400-0": `inset 0 0px 0 0 ${colors.accent400}`,
          "accent400-bottom-12": `inset 0 -12px 0 0 ${colors.accent400}`,
          "accent500-bottom-12": `inset 0 -12px 0 0 ${colors.accent500}`,
        },
      },
    },
    future: {
      hoverOnlyWhenSupported: true,
    },
  };
}

function extractNestedTokens(tokens, tokenName, tokenType) {
  if (!tokens) {
    return {};
  }
  const result = {};
  const extract = (obj) => {
    for (const key in obj) {
      const item = obj[key];
      if (item.value && item.name) {
        const name = camelCase(item.name.replace(tokenName, ""));
        result[name] = item.value;
      } else {
        extract(item);
      }
    }
  };
  extract(tokens[tokenType]);
  return result;
}

function extractSimpleTokens(tokens, tokenName, unit) {
  if (!tokens) {
    return {};
  }
  const result = {};
  for (const key in tokens) {
    const item = tokens[key];
    if (item.value && item.name) {
      const name = camelCase(item.name.replace(tokenName, ""));
      result[name] = unit ? `${item.value}${unit}` : item.value;
    }
  }

  return result;
}

export function getSpacingFromTokens(tokens) {
  const spacings = extractSimpleTokens(tokens?.spacings, "spacings");
  const negativeSpacings = {};
  for (const key in tokens?.spacings) {
    const item = tokens?.spacings[key];
    if (item.value && item.name) {
      const name = camelCase(item.name.replace("spacings", ""));
      const negativSpaceName = "n" + name;
      negativeSpacings[negativSpaceName] = `${-parseInt(item.value)}`;
    }
  }

  return { ...spacings, ...negativeSpacings };
}

export function getFontFamiliesFromTokens(tokens) {
  const fonts = extractSimpleTokens(tokens?.fontFamilies, "fontFamilies");
  const result = {
    standard: [fonts.inter, "sans-serif"],
    emotional: [fonts.notoSerifDisplay, "serif"],
    custom: [fonts.arial, "sans-serif"],
  };
  return result;
}
