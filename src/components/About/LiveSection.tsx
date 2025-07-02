import React from "react";
import { Camera, Headphones, Music, Users, LucideIcon } from "lucide-react";
import { CSS_CLASSES } from "./About";
import { useTranslations } from "next-intl";

type LiveCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  iconColor: string;
};

const LiveCard: React.FC<LiveCardProps> = ({
  icon: Icon,
  title,
  description,
  gradientFrom,
  gradientTo,
  borderColor,
  iconColor,
}) => (
  <div
    className={`bg-gradient-to-r from-${gradientFrom} to-${gradientTo} backdrop-blur-xl border border-${borderColor} rounded-2xl p-6`}
  >
    <div className="flex items-start space-x-4">
      <Icon className={`w-6 h-6 mt-1 flex-shrink-0 text-${iconColor}`} />
      <div>
        <h4 className={`text-lg font-semibold ${CSS_CLASSES.primaryText} mb-2`}>
          {title}
        </h4>
        <p className={CSS_CLASSES.secondaryText}>{description}</p>
      </div>
    </div>
  </div>
);

export default function LiveSection() {
  const t = useTranslations("about.live");
  const cards: LiveCardProps[] = [
    {
      icon: Camera,
      title: t("cards.0.title"),
      description: t("cards.0.description"),
      gradientFrom: "purple-600/10",
      gradientTo: "pink-600/10",
      borderColor: "purple-300/20",
      iconColor: "purple-400",
    },
    {
      icon: Music,
      title: t("cards.1.title"),
      description: t("cards.1.description"),
      gradientFrom: "emerald-500/10",
      gradientTo: "teal-500/10",
      borderColor: "emerald-300/20",
      iconColor: "emerald-400",
    },
    {
      icon: Headphones,
      title: t("cards.2.title"),
      description: t("cards.2.description"),
      gradientFrom: "blue-500/10",
      gradientTo: "cyan-500/10",
      borderColor: "blue-300/20",
      iconColor: "blue-400",
    },
    {
      icon: Users,
      title: t("cards.3.title"),
      description: t("cards.3.description"),
      gradientFrom: "rose-500/10",
      gradientTo: "pink-500/10",
      borderColor: "rose-300/20",
      iconColor: "rose-400",
    },
  ];

  return (
    <div className="mt-8 space-y-6">
      {cards.map((card, index) => (
        <LiveCard key={index} {...card} />
      ))}
    </div>
  );
}
