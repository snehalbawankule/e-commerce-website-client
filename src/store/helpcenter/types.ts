export type HelpCenter = {
  id: string;
  name: string;
  faqs: [
    {
      id: string;
      helpCenterId: string;
      name: string;
      faqs_card: [
        {
          id: string;
          faqsId: string;
          name: string;
        }
      ];
    }
  ];
};

export type defaultState = {
  helpCenter: HelpCenter[];
};

export const defaultHelpCenter: HelpCenter = {
  id: "",
  name: "",
  faqs: [
    {
      id: "",
      helpCenterId: "",
      name: "",
      faqs_card: [
        {
          id: "",
          faqsId: "",
          name: "",
        },
      ],
    },
  ],
};
