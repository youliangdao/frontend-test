const someApi = {
  create: async (name) => {
    // 処理
    return {
      id: 1,
      name,
    };
  },
  hasUser: async (name) => {
    // 処理
    return false;
  },
};

const creteUser = async ({ name, agreeTerms }) => {
  if (agreeTerms !== true) {
    throw new Error("同意が必要です");
  }
  const hasUser = await someApi.hasUser(name);
  if (hasUser) {
    throw new Error("すでにユーザーが存在します");
  }
  const res = await someApi.create(name);
  return { id: res.id };
};

test("ユーザー作成が成功した場合、idを返す", async () => {
  const id = 1;
  const name = "いない";
  const agreeTerms = true;
  const create = jest.spyOn(someApi, "create").mockImplementation(() => {
    return {
      id,
      name,
    };
  });
  const hasUser = jest.spyOn(someApi, "hasUser").mockImplementation(() => {
    return false;
  });
  const res = await creteUser({ name, agreeTerms });

  expect(create).toHaveBeenCalledTimes(1);
  expect(create).toHaveBeenCalledWith(name);
  expect(hasUser).toHaveBeenCalledTimes(1);
  expect(hasUser).toHaveBeenCalledWith(name);
  expect(res.id).toBe(id);
});
