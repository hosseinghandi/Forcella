import * as Icon from "../utils/Icons";

const requestData = (userdata,request) => {
    return request === "profile" && 
    ([
        [
          userdata.personalInfo.firstName,
          Icon.Person_outlined,
          "firstName",
          "",
        ],
        [userdata.personalInfo.lastName, Icon.Person_outlined, "lastName", ""],
        [
          userdata.personalInfo.address.street,
          Icon.Location,
          "street",
          "address",
        ],
        [userdata.personalInfo.address.city, Icon.Location, "city", "address"],
        [
          userdata.personalInfo.address.zipcode,
          Icon.Mailbox,
          "zipcode",
          "address",
        ],
        [userdata.personalInfo.email, Icon.Email, "email", ""],
        [userdata.personalInfo.phone, Icon.Phone, "phone", ""],
        [userdata.personalInfo.phone, Icon.Phone, "phone", ""],
        [userdata.personalInfo.language === "en" ? "English" : "Italian", Icon.Language, "language",""],
        [userdata.personalInfo.theme ? "dark" : "light", Icon.Theme, "theme",""],
      ])
}

export default requestData