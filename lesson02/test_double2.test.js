const { afterEach } = require("node:test");

const getTheme = () => {
  const time = new Date().getHours();
  console.log(time);
  if (time <= 6 && time < 18) {
    return "light";
  }
  return "dark";
};

describe("getTheme()", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  test("returns dark theme after 6am", () => {
    const mockDate = new Date(2022, 0, 10, 22);
    jest.spyOn(global, "Date").mockReturnValue(mockDate);
    const theme = getTheme();

    expect(theme).toBe("dark");
  });
  test("returns light theme before 6am", () => {
    const mockDate = new Date(2022, 0, 10, 14);
    jest.spyOn(global, "Date").mockReturnValue(mockDate);
    const theme = getTheme();

    expect(theme).toBe("light");
  });
});
