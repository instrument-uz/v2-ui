import { Input } from "@/stories/Header/Search";
import { ArrowRight, MessageCircle, Pen, Plus, Upload } from "lucide-react";
import Star from "../Star";
import { Tab } from "@headlessui/react";
import { cn } from "@/lib/utils";

function Comments() {
  return (
    <>
      <div className="py-12">
        <h3 className="font-bold text-2xl text-[#001A34]">Отзывы:</h3>
        <Tab.Group>
          <Tab.List>
            <div className="tabs | flex items-center | pt-5">
              <Tab className="outline-none focus:outline-none">
                {({ selected }) => (
                  <div
                    className={cn({
                      "tab | font-semibold | duration-200 | py-3 px-5 | border-b-2 | flex items-center | rounded-t-[7px]":
                        true,
                      "bg-[#F2F9FF] text-[#30A8F7] | border-[#30A8F7]":
                        selected,
                    })}
                  >
                    <MessageCircle
                    // className="h-6 duration-200"
                    // color={selected && `#30A8F7`}
                    />
                    <p className="pl-4">Отзывы</p>
                  </div>
                )}
              </Tab>

              <Tab className="outline-none focus:outline-none | ml-5">
                {({ selected }) => (
                  <div
                    className={cn({
                      "tab | font-semibold | duration-200 | py-3 px-5 | border-b-2 | flex items-center | rounded-t-[7px]":
                        true,
                      "bg-[#F2F9FF] text-[#30A8F7] | border-[#30A8F7]":
                        selected,
                    })}
                  >
                    <Pen
                      className="h-6 duration-200"
                      // color={selected && `#30A8F7`}
                    />
                    <p className="pl-4">Написать отзыв</p>
                  </div>
                )}
              </Tab>
            </div>
          </Tab.List>

          <Tab.Panels>
            <div className="panels">
              <Tab.Panel className="outline-none focus:outline-none">
                <div>
                  <div className="review:comment | pt-10">
                    <div className="comment flex items-center justify-between ">
                      <div className="comment_text | w-1/2">
                        <div className="title flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="avatar h-10">
                              <img
                                src="/images/avatar.png"
                                alt="avatar"
                                className="h-full object-contain"
                              />
                            </div>

                            <p className="font-bold text-lg | pl-3">
                              Сабуров Б.
                            </p>
                          </div>

                          <div className="flex flex-col justify-end items-end">
                            <Star
                              onRate={() => {}}
                              rate={4}
                              total="12"
                              star={3}
                            />
                            <p className="text-xs mt-1 text-[#9D9D9D]">
                              7 апрель 2021
                            </p>
                          </div>
                        </div>

                        <div className="body | pt-5">
                          <div className="plus">
                            <h3 className="font-bold text-[#001A34]">Плюсы:</h3>
                            <p className="text-[#001a34e6] text-sm | pt-1">
                              Очень тихий, совсем не греется, тонкий, лёгкий и
                              красивый :) Офигенный звук и картинка.
                            </p>
                          </div>

                          <div className="minus py-5">
                            <h3 className="font-bold text-[#001A34]">
                              Минусы:
                            </h3>
                            <p className="text-[#001a34e6] text-sm | pt-1">
                              В какой момент перестал меняться язык, пришлось
                              гуглить и менять.
                            </p>
                          </div>

                          <div className="general">
                            <h3 className="font-bold text-[#001A34]">
                              Комментарий:
                            </h3>
                            <p className="text-[#001a34e6] text-sm | pt-1">
                              Сложно что-то сказать пока что, тк это первый
                              макбук и очень не привычная ось после винды. И
                              казалось, что будет маленьким экран. Но вполне
                              достаточно! На фото лежит с айпадом вторым (для
                              сравнения размера)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="comment_images px-5 | w-1/2 | grid grid-cols-2 gap-5">
                        <div className="h-40 rounded-[7px] overflow-hidden w-full">
                          <img
                            src="/images/r-1.png"
                            alt="1"
                            className="h-full object-center object-cover w-full"
                          />
                        </div>

                        <div className="h-40 rounded-[7px] overflow-hidden w-full">
                          <img
                            src="/images/r-2.png"
                            alt="1"
                            className="h-full object-center object-cover w-full"
                          />
                        </div>

                        <div className="h-40 rounded-[7px] overflow-hidden w-full">
                          <img
                            src="/images/r-4.png"
                            alt="1"
                            className="h-full object-center object-cover w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="review:comment | pt-10">
                    <div className="comment flex items-center justify-between ">
                      <div className="comment_text | w-1/2">
                        <div className="title flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="avatar h-10">
                              <img
                                src="/images/avatar2.png"
                                alt="avatar"
                                className="h-full object-contain"
                              />
                            </div>

                            <p className="font-bold text-lg | pl-3">
                              Николай Г.
                            </p>
                          </div>

                          <div className="flex flex-col justify-end items-end">
                            <Star
                              onRate={() => {}}
                              rate={4}
                              total="12"
                              star={3}
                            />
                            <p className="text-xs mt-1 text-[#9D9D9D]">
                              7 апрель 2021
                            </p>
                          </div>
                        </div>

                        <div className="body | pt-5">
                          <div className="plus">
                            <h3 className="font-bold text-[#001A34]">Плюсы:</h3>
                            <p className="text-[#001a34e6] text-sm | pt-1">
                              MacOS, скорость работы, новый производительный
                              процессор, недорогой.
                            </p>
                          </div>

                          <div className="minus py-5">
                            <h3 className="font-bold text-[#001A34]">
                              Минусы:
                            </h3>
                            <p className="text-[#001a34e6] text-sm | pt-1">
                              Мало памяти, почти весь софт платный.{" "}
                            </p>
                          </div>

                          <div className="general">
                            <h3 className="font-bold text-[#001A34]">
                              Комментарий:
                            </h3>
                            <p className="text-[#001a34e6] text-sm | pt-1">
                              Прекрасная машинка от Apple, по сути своей
                              классика в мире ноутбуков. С новым процессором
                              стал заметно быстрее, чем Pro 2018. Просыпается и
                              запускает программы моментально. Жаль, что почти
                              весь софт платный, но к этому просто нужно быть
                              готовым при покупке MacBook. Для тех кто хочет
                              поиграть на нем в не самые тяжёлые игры - можно
                              брать.{" "}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="comment_images px-5 | w-1/2 | grid grid-cols-2 gap-5">
                        <div className="h-40 rounded-[7px] overflow-hidden w-full">
                          <img
                            src="/images/r-1.png"
                            alt="1"
                            className="h-full object-center object-cover w-full"
                          />
                        </div>

                        <div className="h-40 rounded-[7px] overflow-hidden w-full">
                          <img
                            src="/images/r-2.png"
                            alt="1"
                            className="h-full object-center object-cover w-full"
                          />
                        </div>

                        <div className="h-40 rounded-[7px] overflow-hidden w-full">
                          <img
                            src="/images/r-4.png"
                            alt="1"
                            className="h-full object-center object-cover w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="load:more flex items-center | mt-5 cursor-pointer">
                    <div className="bg-[#30A8F7] w-10 h-10 flex items-centerc rounded-full click:scale">
                      <ArrowRight className="h-4" />
                    </div>

                    <div className="text-[#30A8F7] duration-200 font-bold pl-2 click:scale block">
                      Загрузить больше
                    </div>
                  </div>
                </div>
              </Tab.Panel>

              <Tab.Panel className="outline-none focus:outline-none w-2/3">
                <div className="write:comment pt-10">
                  <div className="star | flex items-center | justify-between">
                    <h3 className="text-lg font-semibold">Оценка:</h3>
                    <Star
                      rate={4}
                      total="12"
                      star={5}
                      size={`large`}
                      // rate={true}
                      onRate={(e) => console.log(e, "sadasd")}
                    />
                  </div>

                  <div className="inputs w-full pt-7">
                    <div className="flex items-center w-full">
                      <div className="w-full pr-5">
                        <h3 className="text-base font-semibold | pb-3">
                          Плюсы:
                        </h3>
                        <Input
                        // className="h-24 w-full"
                        // placeholder={`Что вам понравилось? 😊`}
                        />
                      </div>

                      <div className="w-full">
                        <h3 className="text-base font-semibold | pb-3">
                          Минусы:
                        </h3>
                        <Input
                        // className="h-24 w-full"
                        // placeholder={`Что вас разочаровало? 😠`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full pt-7">
                    <h3 className="text-base font-semibold | pb-3">
                      Комментарий:
                    </h3>
                    <Input
                    // className="h-24 w-full"
                    // placeholder={`Ваше мнение о товаре..`}
                    />
                  </div>

                  <div className="w-full pt-7">
                    <h3 className="text-base font-semibold | pb-3">
                      Фотографии:
                    </h3>
                    <Upload />
                  </div>
                </div>

                <div className="add:to:cart w-full">
                  <button className="mt-7 bg-[#00DA4A] text-white text-xl font-extrabold flex items-centerc w-full py-3 rounded-[10px] click:scale outline-none focus:outline-none">
                    <span>
                      <Plus className="h-5 mr-5" color={`white`} />
                    </span>
                    Оставить мнение
                  </button>
                </div>
              </Tab.Panel>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
}

export default Comments;
