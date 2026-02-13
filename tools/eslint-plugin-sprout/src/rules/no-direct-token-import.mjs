/**
 * @fileoverview Disallow direct imports of design-token CSS files.
 * Tokens are already provided by the sprout runtime — importing them
 * directly causes duplication and ordering issues.
 */

const FORBIDDEN_SPECIFIER = "@qlik/design-tokens/generated/tokens/css/sprout-tokens.css";

/** @type {import("eslint").Rule.RuleModule} */
export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Disallow direct import of @qlik/design-tokens CSS file. Tokens are already provided by the sprout runtime.",
      recommended: true,
    },
    fixable: "code",
    messages: {
      forbidden: "Do not import '{{ source }}' directly. The design tokens are already provided by the sprout runtime.",
    },
    schema: [],
  },

  create(context) {
    /**
     * Checks if a source value matches the forbidden specifier.
     */
    function check(node, source) {
      if (source && source.value === FORBIDDEN_SPECIFIER) {
        context.report({
          node,
          messageId: "forbidden",
          data: { source: source.value },
          fix(fixer) {
            const sourceCode = context.sourceCode ?? context.getSourceCode();
            const tokenAfter = sourceCode.getTokenAfter(node, { includeComments: true });
            // Remove from the start of the node to the start of the next token (eats trailing newline)
            const end = tokenAfter ? tokenAfter.range[0] : node.range[1];
            return fixer.removeRange([node.range[0], end]);
          },
        });
      }
    }

    return {
      // import "…"  /  import x from "…"
      ImportDeclaration(node) {
        check(node, node.source);
      },
    };
  },
};
