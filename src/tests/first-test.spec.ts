import { User } from "@models/user";

test("it should be ok", () => {
  const user = new User();

  user.name = "Eduardo Pereira Boares";

  expect(user.name).toEqual("Eduardo Pereira Boares");
});
