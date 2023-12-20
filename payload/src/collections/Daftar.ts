import { CollectionConfig } from "payload/types";

const daftar: CollectionConfig = {
  slug: "daftar",
  // auth: true,
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "nama",
      label: "nama",
      type: "text",
      required: true,
    },
    {
      name: "email",
      label: "email",
      type: "email",
      required: true,
    },
    {
        name: "asal",
        label: "asal sekolah",
        type: "text",
        required: true,
    },
    {
        name: "status",
        label: "status",
        type: "select",
        options: ["Waiting", "Rejected", "Accepted"],
    },
    {
        name: "tanggal",
        label: "tanggal pendaftaran",
        type: "date",
        // required: true,
        // admin: {
        //     date: {
        //         pickerAppearance: 'dayOnly',
        //         displayFormat: 'MM DD YYYY',
        //     }
        // }
    }
  ],
};

export default daftar;
