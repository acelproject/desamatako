import { describe, it } from "node:test";
import { render } from "@testing-library/react";
import ObjekWisata from "@/app/objek-wisata/page";

describe("Objek Wisata Page", () => {
  it("should render", () => {
    const page = render(<ObjekWisata />);
    expect(page).toMatchInlineSnapshot();
  });
});
