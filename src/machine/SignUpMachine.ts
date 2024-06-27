import { createActorContext } from "@xstate/react";
import { assign, setup } from "xstate";

const signUpFlowMachine = setup({
  types: {
    context: {} as {
      form: {
        email: string;
        password: string;
        name: string;
      };
      accountType: string;
      businessName: string;
    },
    events: {} as
      | {
          type: "ENTER_EMAIL";
          params: { email: string };
        }
      | {
          type: "ENTER_PASSWORD";
          params: { password: string };
        }
      | {
          type: "ENTER_NAME";
          params: { name: string };
        }
      | { type: "ON_NEXT" }
      | { type: "ON_BACK" }
      | { type: "SAVE_ACCOUNT_TYPE"; params: { accountType: string } }
      | { type: "SAVE_BUSINESS_NAME"; params: { businessName: string } },
  },

  actions: {
    saveForm: (
      _,
      params: { email?: string; password?: string; name?: string }
    ) => {
      return {
        form: {
          email: params.email,
          password: params.password,
          name: params.name,
        },
      };
    },
    saveAccountType: (_, params: { accountType: string }) => {
      return {
        accountType: params.accountType,
      };
    },

    saveBusinessName: (_, params: { businessName: string }) => {
      return {
        businessName: params.businessName,
      };
    },
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5SwJZQHYFUAOAxANgPYDuAdAGYr74rpS6EBOAtgMQDKAhgG5gCizTlQBynZmACC6CAAVOsWMSYQA2gAYAuolDZCqAC4pC6bSAAeiAIwA2AJylb1gBwB2F5csBmAExqALH5OTgA0IACeVmoArKSuUWoJatZqLn62KQC+GaGoGDgEJKSwYPhgAMb6EmVlhACu6PoAKmHYYBw8ktV1Dc2t6lpIILoGRiaDFgjWln6kft6WTrae8S7W8d6hEQiW0bEu8YnJqekuWTloWHhEZJTUtFAAQrWo6HCwouLtvE8vbx9g-VMwxQhmMpgmtiCpAWqScASiUTcTiim0iMTiiSSKTSmWyIFylwKZFgtQARswQYY6BwyRT9IDBsDQWNQBMPLZLLF-NZrKtPLY-PzUQgnJyDgllt5rN4otZPJYsnj0IQIHBTAT8tcgXoQaNwYgALTWYUGmK2c0Wy2WzxnfEXTWFW40OgMFjakZg8aIObCyzeez7RLeTypPyrZG2jVXQrFUoVKo1epNFpgd26z2s72eTyzJLeNzShIuYOeX3+0iBhLB0PhpyR+3Rm5UZ2PZ60P5iVOMnXM-UIFy2FykNRLVLSqJBTwBMsB8XVgLhqL1vKNoq0yn3NO9r3bBackchmzypwpYu+kPDzHzAJ+kenRVAA */
  id: "signUpFlow",
  initial: "fillingForm",
  context: {
    form: {
      email: "",
      password: "",
      name: "",
    },
    accountType: "",
    businessName: "",
  },
  states: {
    fillingForm: {
      on: {
        ENTER_EMAIL: {
          actions: assign({
            form: ({ context, event }) => ({
              ...context.form,
              email: event.params.email,
            }),
          }),
        },
        ENTER_PASSWORD: {
          actions: assign({
            form: ({ context, event }) => ({
              ...context.form,
              password: event.params.password,
            }),
          }),
        },

        ENTER_NAME: {
          actions: assign({
            form: ({ context, event }) => ({
              ...context.form,
              name: event.params.name,
            }),
          }),
        },

        ON_NEXT: {
          target: "choosingAccountType",
        },
      },
    },
    choosingAccountType: {
      on: {
        SAVE_ACCOUNT_TYPE: {
          actions: assign({
            accountType: ({ event }) => event.params.accountType,
          }),
        },
        ON_NEXT: {
          target: "fillingBusinessName",
        },
        ON_BACK: {
          target: "fillingForm",
        },
      },
    },

    fillingBusinessName: {
      on: {
        SAVE_BUSINESS_NAME: {
          actions: [
            {
              type: "saveBusinessName",
              params: {
                businessName: "businessName",
              },
            },
          ],
          target: "completed",
        },
      },
    },
    completed: {
      type: "final",
    },
  },
});

export const {
  Provider: SignMachineProvider,
  useActorRef,
  useSelector,
} = createActorContext(signUpFlowMachine);
