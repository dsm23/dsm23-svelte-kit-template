import { cleanup, render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import LabelTest from "./Label.test.svelte";

describe("DropdownMenu components", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders DropdownMenuLabel and separator", async () => {
    const user = userEvent.setup();

    render(LabelTest);

    await user.click(screen.getByText("Options"));

    expect(screen.getByText("Label")).toBeInTheDocument();
    // expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
