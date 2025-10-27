import React, { useEffect, useRef, useState, useId, useMemo  } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Wallet, ShieldCheck, ChevronLeft, ChevronRight, Cpu, Cloud, Database, Link, CheckCircle, FileText, ChevronDown, BookOpen, Link as LinkIcon  } from "lucide-react";
import { FAQ } from "./faq";
import Resources from "./resources";
const ACCENT = "#65cdb2";

export default function FAQResourcesSection(props) {
    return (
        <div>
            <FAQ {...props} />
            <Resources {...props} />
        </div>
    );
}