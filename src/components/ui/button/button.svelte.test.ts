import { render, screen } from "@testing-library/svelte";
import { describe, expect, it } from "vitest";
import Button from "./button.test.svelte";

describe("component", () => {
  describe("Button", () => {
    it("should render correctly", () => {
      render(Button);

      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render correctly, asChild", () => {
      render(Button, { href: "#" });

      expect(screen.getByRole("link")).toBeInTheDocument();
    });
  });
});
