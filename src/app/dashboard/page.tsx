"use client";
import { Table } from "@/components/table/Table";
import React, { useState, useEffect } from "react";
import {
  ColumnType,
  TableAdapter,
  TableColumn,
  PageModel,
  PageEvent,
} from "@/components/table/models/table.model";
import { PageableModel } from "@/models/pageable.model";
import { FetchDataFn } from "@/models/table-fetch-data-fn.model";

function Page() {
  return (
    // <div className="flex justify-center p-96">به داشبورد خود خوش آمدید</div>
    <PaymentGatewaysPage />
  );
}

export default Page;

interface PaymentGateway {
  id: string;
  businessName: string;
  bankAccount: string;
  createdAt: string;
}

class PaymentGatewaysAdapter extends TableAdapter<PaymentGateway> {
  paginatorConfig = {
    onPageChange: (pageEvent: PageEvent) => {
      this._fetchDataFn({
        page: pageEvent.pageIndex,
        size: pageEvent.pageSize,
      });
    },
  };
  constructor(private _fetchDataFn: FetchDataFn) {
    super();
  }

  createColumns(): TableColumn<PaymentGateway>[] {
    return [
      {
        key: "id",
        label: "ID",
        type: ColumnType.TEXT,
        value: (element) => element.id,
        className: (element) =>
          element.businessName === "Ali" ? "bg-red-100" : "bg-green-100",
      },
      {
        key: "businessName",
        label: "Business Name",
        type: ColumnType.BADGE,
        value: (element) => element.businessName,
      },
      {
        key: "bankAccount",
        label: "Bank Account",
        type: ColumnType.TEXT,
        value: (element) => element.bankAccount,
      },
      {
        key: "status",
        label: "Status",
        type: ColumnType.BADGE,
        value: () => "Active", // Example badge value
      },
      {
        key: "actions",
        label: "Actions",
        type: ColumnType.ACTIONS,
        actions: {
          edit: {
            isVisible: () => true,
            onClick: (element) => console.log("Edit", element.id),
            icon: <span>✏️</span>,
          },
          delete: {
            isVisible: () => true,
            onClick: (element) => console.log("Delete", element.id),
            icon: <span>🗑</span>,
          },
        },
      },
    ];
  }
}

const PaymentGatewaysPage = () => {
  const [adapter] = useState(
    () => new PaymentGatewaysAdapter(fetchPaymentGatewaysHandler),
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchPaymentGatewaysHandler({ page: 1, size: 1 });
    };
    loadData();
  }, []);

  async function fetchPaymentGatewaysHandler(
    pageable: PageableModel,
  ): Promise<void> {
    console.log(pageable);
    setLoading(true);
    const data = await fetchPaymentGateways(0, 10);
    adapter.data = data;
    console.log(adapter.data);
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Gateways</h1>
      <Table adapter={adapter} loading={loading} />
    </div>
  );
};

async function fetchPaymentGateways(
  page: number,
  size: number,
): Promise<PageModel<PaymentGateway>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        content: Array.from({ length: size }, (_, i) => ({
          id: `ID-${page * size + i + 1}`,
          businessName: `Business ${page * size + i + 1}`,
          bankAccount: `Account ${page * size + i + 1}`,
          createdAt: new Date().toISOString(),
        })),
        totalElements: 100,
        totalPages: 10,
        size,
        number: page,
      });
    }, 500);
  });
}
