"use client";
import { Table } from "@/components/table/Table";
import React, { useState, useEffect } from "react";
import {
  ColumnType,
  TableAdapter,
  TableColumn,
  PageModel,
} from "@/components/table/models/table.model";

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
  private fetchData: (
    page: number,
    size: number,
  ) => Promise<PageModel<PaymentGateway>>;

  constructor(
    fetchData: (
      page: number,
      size: number,
    ) => Promise<PageModel<PaymentGateway>>,
  ) {
    super();
    this.fetchData = fetchData;
    this.paginatorConfig = {
      onPageChange: async (pageEvent) => {
        const data = await this.fetchData(
          pageEvent.pageIndex,
          pageEvent.pageSize,
        );
        this.data = data;
      },
    };
  }

  createColumns(): TableColumn<PaymentGateway>[] {
    return [
      {
        key: "id",
        label: "ID",
        type: ColumnType.TEXT,
        value: (element) => element.id,
      },
      {
        key: "businessName",
        label: "Business Name",
        type: ColumnType.TEXT,
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
    () => new PaymentGatewaysAdapter(fetchPaymentGateways),
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchPaymentGateways(0, 10);
      adapter.data = data;
      setLoading(false);
    };
    loadData();
  }, [adapter]);

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
